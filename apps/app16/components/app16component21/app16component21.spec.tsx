import { render } from '@testing-library/react';

import App16component21 from './app16component21';

describe('App16component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component21 />);
    expect(baseElement).toBeTruthy();
  });
});
