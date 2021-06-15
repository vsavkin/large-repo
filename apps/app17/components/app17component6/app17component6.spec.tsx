import { render } from '@testing-library/react';

import App17component6 from './app17component6';

describe('App17component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App17component6 />);
    expect(baseElement).toBeTruthy();
  });
});
