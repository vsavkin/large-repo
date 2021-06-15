import { render } from '@testing-library/react';

import App4component92 from './app4component92';

describe('App4component92', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component92 />);
    expect(baseElement).toBeTruthy();
  });
});
