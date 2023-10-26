#include<stdio.h>

int searchInsert(int* arr, int size, int target)
{
    int k = 0;

    for(int i= 0; i<size; i++)
    {
        if(arr[i] > target || arr[i] == target)
        {
            k = i;
            break;
        }
        if(i+1 == size && arr[i] < target)
        {
            k = i +1;
            break;
        }
    }

    return k;
}

int main(){

    int arr[4] = {1,3,5,6};

    int result = searchInsert(arr, 4, 7);

    printf("Insert position is: %d", result);

    return 0;
}