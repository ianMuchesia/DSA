#include <stdio.h>

int climbingStairs(int n)
{

 
    if(n>1)
    {
        return climbingStairs(n-2) + climbingStairs(n-1);
    }else{
        return 1;
    }
 
  
   
    
}

int factorial(int n)
{
    if(n>0){
        return factorial(n-1) * n;
    }else
    {
        return 1;
    }
}
int main()
{
    int results = climbingStairs(4);

    printf("%d", results);
    return 0;
}