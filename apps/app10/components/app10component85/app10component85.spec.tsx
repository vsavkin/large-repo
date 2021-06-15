import { render } from '@testing-library/react';

import App10component85 from './app10component85';

describe('App10component85', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component85 />);
    expect(baseElement).toBeTruthy();
  });
});
