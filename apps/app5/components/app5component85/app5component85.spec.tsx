import { render } from '@testing-library/react';

import App5component85 from './app5component85';

describe('App5component85', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component85 />);
    expect(baseElement).toBeTruthy();
  });
});
