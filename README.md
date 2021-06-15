# Large Repo Using Distributed Task Execution

This repo has:

- 100 shared libraries (small libs)
- 20 Next.js applications (each has 200 pages and 100 components)
  - The applications require the shared libraries to be built first.
- 20 Cypress test suites

The repo is not "real-world" but its CI performance is similar to most mid-size repos in organizations.

## Running CI on 1 Agents -- 1 Hour

Running CI on a single agent takes about 1 hour.

```yaml
name: LargeRepo

on: [ pull_request ]

env:
  NX_BRANCH: ${{ github.event.number || github.ref }}
  NX_RUN_GROUP: ${{ github.run_id }}

jobs:
  pr:
    runs-on: ubuntu-latest
    if: ${{ github.event_name == 'pull_request' }}
    steps:
      - uses: actions/checkout@v2
        with:
          ref: ${{ github.event.pull_request.head.ref }}
          fetch-depth: 0
      - uses: actions/setup-node@v1
      - run: npm install
      - run: npx nx affected --base=origin/main --target=build --parallel --max-parallel=3
      - run: npx nx affected --base=origin/main --target=test --parallel --max-parallel=3
      - run: npx nx affected --base=origin/main --target=lint --parallel --max-parallel=3
      - run: npx nx affected --base=origin/main --target=e2e
```

## Running CI on 15 Agents -- 7 Minutes

To run CI on multiple agents, you need to set NX_CLOUD_DISTRIBUTED_EXECUTION to true and configure a matrix of agents.

```yaml
name: LargeRepo

on: [ pull_request ]

env:
  NX_BRANCH: ${{ github.event.number || github.ref }}
  NX_RUN_GROUP: ${{ github.run_id }}
  NX_CLOUD_DISTRIBUTED_EXECUTION: 'true'

jobs:
  agents:
    name: Nx Cloud Agents
    runs-on: ubuntu-latest
    timeout-minutes: 60
    strategy:
      matrix:
        agent: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
      - run: npm install
      - name: Start Nx Agent ${{ matrix.agent }}
        run: npx nx-cloud start-agent
  pr:
    runs-on: ubuntu-latest
    if: ${{ github.event_name == 'pull_request' }}
    steps:
      - uses: actions/checkout@v2
        with:
          ref: ${{ github.event.pull_request.head.ref }}
          fetch-depth: 0
      - uses: actions/setup-node@v1
      - run: npm install
      - name: Run verification
        uses: JamesHenry/parallel-bash-commands@v0.1
        with:
          cmd1: npx nx affected --base=origin/main --target=build --parallel --max-parallel=3
          cmd2: npx nx affected --base=origin/main --target=test --parallel --max-parallel=3
          cmd3: npx nx affected --base=origin/main --target=lint --parallel --max-parallel=3
          cmd4: npx nx affected --base=origin/main --target=e2e
      - run: npx nx-cloud stop-all-agents
```


## Important Observations

- As the repo grows, the number of agents can be increased to keep the worst-case CI time low.
- The numbers above are worst-case scenarios, where Nx has to rebuild/retest everything. Because Nx has computation caching and code change analysis (affected:*), the worst case scenario isn't very common. So the average CI will be a lot lower.
- Because the shared libs have to be built first, sharding/binning won't work for builds. In this particular example, the task graph is pretty simple, so you could try to make it work. One must imagine shared libs depending on each other, at which point, sharding won't work at all.
- Note that regardless of the number of agents, the Nx Cloud card shows 4 commands (build/test/lint/e2e).


