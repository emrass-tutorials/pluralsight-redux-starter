import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('Author Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formatted for use in a dropdown', () => {
      const authors = [
        {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
        {id: 'enrico-mrass', firstName: 'Enrico', lastName: 'Mraß'}
      ];

      const expected = [
        {value: 'cory-house', text: 'Cory House'},
        {value: 'enrico-mrass', text: 'Enrico Mraß'}
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});
