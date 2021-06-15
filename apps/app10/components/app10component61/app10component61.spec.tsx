import { render } from '@testing-library/react';

import App10component61 from './app10component61';

describe('App10component61', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component61 />);
    expect(baseElement).toBeTruthy();
  });
});
