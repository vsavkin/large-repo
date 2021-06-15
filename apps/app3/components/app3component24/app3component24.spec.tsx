import { render } from '@testing-library/react';

import App3component24 from './app3component24';

describe('App3component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component24 />);
    expect(baseElement).toBeTruthy();
  });
});
