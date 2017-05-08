import _ from 'lodash';

/**
 * Convert a four-digit year into a string representing the fiscal year range.
 * @example
 * yearToFiscalYear(2014) -> '2014-15'
 * @param  {number} yr A four-digit year used as the start of the fiscal year.
 * @return {string} A string with the given year, a dash, and the two-digit
 * abbreviation of the following year.
 */
export const yearToFiscalYear = (yr) => `${yr}-${_.toNumber(yr.substr(2,2)) + 1}`;
