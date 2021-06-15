import { render } from '@testing-library/react';

import App10component7 from './app10component7';

describe('App10component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component7 />);
    expect(baseElement).toBeTruthy();
  });
});
