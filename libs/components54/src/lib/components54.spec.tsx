import { render } from '@testing-library/react';

import Components54 from './components54';

describe('Components54', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components54 />);
    expect(baseElement).toBeTruthy();
  });
});
