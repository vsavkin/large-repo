import { render } from '@testing-library/react';

import App3component21 from './app3component21';

describe('App3component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component21 />);
    expect(baseElement).toBeTruthy();
  });
});
