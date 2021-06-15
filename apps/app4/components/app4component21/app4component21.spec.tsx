import { render } from '@testing-library/react';

import App4component21 from './app4component21';

describe('App4component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component21 />);
    expect(baseElement).toBeTruthy();
  });
});
