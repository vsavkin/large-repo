import { render } from '@testing-library/react';

import App11component4 from './app11component4';

describe('App11component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component4 />);
    expect(baseElement).toBeTruthy();
  });
});
