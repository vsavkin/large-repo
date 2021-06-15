import { render } from '@testing-library/react';

import App10component45 from './app10component45';

describe('App10component45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component45 />);
    expect(baseElement).toBeTruthy();
  });
});
