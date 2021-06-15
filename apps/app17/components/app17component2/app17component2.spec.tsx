import { render } from '@testing-library/react';

import App17component2 from './app17component2';

describe('App17component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App17component2 />);
    expect(baseElement).toBeTruthy();
  });
});
