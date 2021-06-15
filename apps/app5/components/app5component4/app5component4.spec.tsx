import { render } from '@testing-library/react';

import App5component4 from './app5component4';

describe('App5component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component4 />);
    expect(baseElement).toBeTruthy();
  });
});
