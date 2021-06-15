import { render } from '@testing-library/react';

import App10component50 from './app10component50';

describe('App10component50', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component50 />);
    expect(baseElement).toBeTruthy();
  });
});
