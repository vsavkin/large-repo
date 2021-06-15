import { render } from '@testing-library/react';

import App3component85 from './app3component85';

describe('App3component85', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component85 />);
    expect(baseElement).toBeTruthy();
  });
});
