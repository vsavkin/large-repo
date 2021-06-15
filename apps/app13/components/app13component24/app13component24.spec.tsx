import { render } from '@testing-library/react';

import App13component24 from './app13component24';

describe('App13component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App13component24 />);
    expect(baseElement).toBeTruthy();
  });
});
