#include<stdio.h>


int sum ()
{

    int sum = 0;
    for(int i = 20; i<=100; i++)
    {
        if(i % 2==0)
        {
            sum = sum + i;
        }
    }

    return sum;


}

int main()
{

    int result = sum();

     printf("%d\n", result);

    return 0;
}