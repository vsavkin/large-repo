import { render } from '@testing-library/react';

import App4component4 from './app4component4';

describe('App4component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component4 />);
    expect(baseElement).toBeTruthy();
  });
});
