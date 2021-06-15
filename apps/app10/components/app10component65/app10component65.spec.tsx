import { render } from '@testing-library/react';

import App10component65 from './app10component65';

describe('App10component65', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component65 />);
    expect(baseElement).toBeTruthy();
  });
});
