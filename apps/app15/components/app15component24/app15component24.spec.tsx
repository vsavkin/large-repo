import { render } from '@testing-library/react';

import App15component24 from './app15component24';

describe('App15component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component24 />);
    expect(baseElement).toBeTruthy();
  });
});
