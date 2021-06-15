import { render } from '@testing-library/react';

import App10component84 from './app10component84';

describe('App10component84', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component84 />);
    expect(baseElement).toBeTruthy();
  });
});
