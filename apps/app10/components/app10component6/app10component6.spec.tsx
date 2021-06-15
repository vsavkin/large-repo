import { render } from '@testing-library/react';

import App10component6 from './app10component6';

describe('App10component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component6 />);
    expect(baseElement).toBeTruthy();
  });
});
