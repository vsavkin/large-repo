import { render } from '@testing-library/react';

import App8component24 from './app8component24';

describe('App8component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8component24 />);
    expect(baseElement).toBeTruthy();
  });
});
