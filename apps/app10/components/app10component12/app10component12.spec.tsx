import { render } from '@testing-library/react';

import App10component12 from './app10component12';

describe('App10component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component12 />);
    expect(baseElement).toBeTruthy();
  });
});
