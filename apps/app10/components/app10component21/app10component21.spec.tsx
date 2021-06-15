import { render } from '@testing-library/react';

import App10component21 from './app10component21';

describe('App10component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component21 />);
    expect(baseElement).toBeTruthy();
  });
});
