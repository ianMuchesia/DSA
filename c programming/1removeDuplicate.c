#include <stdio.h>

int removeDuplicate(int* arr, int size)
{

    int k = 1;
    int fast = 1;


    while (fast < size)
    {
        if (arr[fast] != arr[fast - 1])
        {
            arr[k] = arr[fast];
            k++;
        }
        fast++;
    }

   
    return k;
}

int main()
{

    int arr[5] = {1,2, 3,3,4,};
    int size = sizeof(arr) / sizeof(arr[0]);

    //printf("%d", size);
    int num = removeDuplicate(arr, size);

      for(int i= 0; i<size; i++)
    {
        printf("%d\n",arr[i] );
    }

printf("%d",num);

    return 0;
}