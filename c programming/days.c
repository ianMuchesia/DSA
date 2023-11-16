#include <stdio.h>

int main()
{

    int day;

    printf("please enter your number\n");

    scanf("%d", &day);

    switch (day)
    {
    case 1:
        printf("day 1 is sunday");
        break;
    case 2:
        printf("day 2 is monday");
        break;
    case 3:
        printf("day 3 is tuesday");
        break;
    case 4:
        printf("day 4 is wednesday");
        break;
    case 5:
        printf("day 5 is thursday");
        break;
    case 6:
        printf("day 6 is friday");
        break;
    case 7:
        printf("day 7 is saturday");
        break;
    default:
        printf("number out of range, please input correct number");
    }

    return 0;
}