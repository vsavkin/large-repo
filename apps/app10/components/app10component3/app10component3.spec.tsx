import { render } from '@testing-library/react';

import App10component3 from './app10component3';

describe('App10component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component3 />);
    expect(baseElement).toBeTruthy();
  });
});
