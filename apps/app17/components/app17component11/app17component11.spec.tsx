import { render } from '@testing-library/react';

import App17component11 from './app17component11';

describe('App17component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App17component11 />);
    expect(baseElement).toBeTruthy();
  });
});
