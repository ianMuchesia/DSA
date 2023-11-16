#include<stdio.h>


int main()
{

    int marks[4] = {99,80,80,80};


    int sum = 0;
    for(int i= 0;i<4;i++)
    {
        sum = sum + marks[i];
    }

    float average = sum / 4;

    printf("%.2f\n",average);

    return 0;
}