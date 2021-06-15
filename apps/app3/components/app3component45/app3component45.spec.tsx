import { render } from '@testing-library/react';

import App3component45 from './app3component45';

describe('App3component45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component45 />);
    expect(baseElement).toBeTruthy();
  });
});
