import { render } from '@testing-library/react';

import App17component22 from './app17component22';

describe('App17component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App17component22 />);
    expect(baseElement).toBeTruthy();
  });
});
