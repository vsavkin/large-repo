import { render } from '@testing-library/react';

import App17component15 from './app17component15';

describe('App17component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App17component15 />);
    expect(baseElement).toBeTruthy();
  });
});
