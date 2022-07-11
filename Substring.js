// 5. Substring Check. 

// You are given two strings S 1 and S 2 , you need to check whether the string S1 is a substring of string S2 or not.

var Substring_Check = (S1, S2) => 
{
  let n = S1.length, m = S2.length;
    let i = 0, j = 0;
    while (i < n && j < m) {
        if (S1[i] == S2[j])
            j++;
        i++;
    }
    if(j===m){
      return ("YES");
    }
    else{
      return ("NO");
}
};
