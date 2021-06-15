import { render } from '@testing-library/react';

import App4component24 from './app4component24';

describe('App4component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component24 />);
    expect(baseElement).toBeTruthy();
  });
});
