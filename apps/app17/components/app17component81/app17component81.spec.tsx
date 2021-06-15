import { render } from '@testing-library/react';

import App17component81 from './app17component81';

describe('App17component81', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App17component81 />);
    expect(baseElement).toBeTruthy();
  });
});
