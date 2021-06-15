import { render } from '@testing-library/react';

import App12component24 from './app12component24';

describe('App12component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component24 />);
    expect(baseElement).toBeTruthy();
  });
});
