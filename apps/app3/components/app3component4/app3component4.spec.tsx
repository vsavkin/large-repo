import { render } from '@testing-library/react';

import App3component4 from './app3component4';

describe('App3component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component4 />);
    expect(baseElement).toBeTruthy();
  });
});
