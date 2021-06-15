import { render } from '@testing-library/react';

import App4component45 from './app4component45';

describe('App4component45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component45 />);
    expect(baseElement).toBeTruthy();
  });
});
