const FOO = "bar";
{
  const FOO = "qux";
}

console.log(FOO);

// this program doesn't raise an error, and it logs bar on line 6. One key difference, though, is that we are using const instead of let, which may have led you to believe an error would occur on line 3. However, since the two const variables are separate entities -- that is, the declaration on line 3 declares a completely new constant -- no error occurs.
