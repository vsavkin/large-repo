import { render } from '@testing-library/react';

import App17component50 from './app17component50';

describe('App17component50', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App17component50 />);
    expect(baseElement).toBeTruthy();
  });
});
