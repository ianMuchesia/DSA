#include <stdio.h>
#include <stdlib.h>

struct Node
{
    int data;
    struct Node *link;
};

void countNodes(struct node *head)
{
    int count = 0;
    if(head == NULL)
    {
        printf("Linked list is empty");
    }
    struct Node *ptr =  NULL;
    ptr = head;
    while(ptr != NULL){
        count++;
        ptr = ptr->link;
    }
    printf("%d", count);
}

int main()
{

    return 0;
}