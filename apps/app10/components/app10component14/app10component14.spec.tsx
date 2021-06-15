import { render } from '@testing-library/react';

import App10component14 from './app10component14';

describe('App10component14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component14 />);
    expect(baseElement).toBeTruthy();
  });
});
