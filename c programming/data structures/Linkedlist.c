#include <stdio.h>
#include <stdlib.h>

struct Node
{

    int data;
    struct Node *link;
};

int main()
{
    struct Node *head = NULL;

    // allocate memory for struct node
    head = (struct Node *)malloc(sizeof(struct Node));

    head->data = 45;
    head->link = NULL;

    struct Node *current = (struct Node *)malloc(sizeof(struct Node));
    current->data = 98;
    current->link = NULL;
    head->link = current;

    current = (struct Node *)malloc(sizeof(struct Node));
    current->data = 3;
    current->link = NULL;
    head->link->link = current;

    printf("%d", head->link->link->data);



    return 0;
}
