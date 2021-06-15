import { render } from '@testing-library/react';

import App9component24 from './app9component24';

describe('App9component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9component24 />);
    expect(baseElement).toBeTruthy();
  });
});
