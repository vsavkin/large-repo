import { render } from '@testing-library/react';

import App10component71 from './app10component71';

describe('App10component71', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component71 />);
    expect(baseElement).toBeTruthy();
  });
});
