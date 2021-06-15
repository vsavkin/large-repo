import { render } from '@testing-library/react';

import App10component24 from './app10component24';

describe('App10component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component24 />);
    expect(baseElement).toBeTruthy();
  });
});
